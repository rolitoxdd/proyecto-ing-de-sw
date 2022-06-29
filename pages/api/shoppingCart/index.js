import { getSession } from "@auth0/nextjs-auth0"
import { clientFactory } from "@auth0/nextjs-auth0/dist/auth0-session"
import client from '../../../utils/prisma'
export default async function(req, res){
	try{
      var prismaRes = ""
      if (req.method == 'GET'){
         const products = await client.purchases.findMany();
         res.status(200).json(products);
      }
		if (req.method == 'POST'){
         const nickname = await getSession(req,res).user.nickname
         const body = JSON.parse(req.body)
         body.forEach(async product => {
            try{

            prismaRes = await client.purchases.create({
               data: {
                  id : product.id,
                  name : product.name,
                  price : product.price,
                  nickname,
               }
            })
           }catch(err){
            console.error(err)
            throw new Error('Error inserting purchase on database\n')
           }
           res.status(201).json(prismaRes);
         });
		}
	}catch(err){
      console.log(err);
      res.status(err.status || 500).json({error: err.message });
   }
}