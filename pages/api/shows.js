import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function shows(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res, {
      scopes: ['read:shows']
    });
    // const apiPort = process.env.API_PORT || 3000;
    const response = await fetch(`${process.env.BASE_HOSTNAME}/api/shows`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log('port', apiPort);
    const shows = await response.json();

    res.status(200).json(shows);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
