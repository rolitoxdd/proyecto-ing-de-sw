const prisma = require('./utils/prisma.js');

let products = {
  data: [
    {
      price: 289980,
      name: 'Tarjeta de Video Gigabyte Gaming OC Radeon RX 6500 XT, 4GB GDDR6, PCIe 4.0, ATX',
      img: 'https://media.spdigital.cl/__sized__/products/wwa4qpkz_310df935-thumbnail-255x255-70.jpg',
      stock: 79
    },
    {
      price: 27990,
      name: 'Gabinete Gamer Aerocool Mecha, RGB, Vidrio templado, Mid-Tower, ATX, MicroATX, Mini-ITX',
      img: 'https://media.spdigital.cl/__sized__/products/2ppau9bv_752e18e4-thumbnail-255x255.png',
      stock: 61
    },
    {
      price: 61980,
      name: 'Unidad SSD Kingston SSDNow A400 240GB, 2.5", Lectura 500MB/s Escritura 350MB/s',
      img: 'https://media.spdigital.cl/__sized__/products/8gdhqye1_861d790c-thumbnail-255x255-70.jpg',
      stock: 68
    },
    {
      price: 39990,
      name: 'Disco Duro 1Tb para PC WD Blue 3.5" SATA 6 Gb/s 7200RPM 64MB',
      img: 'https://media.spdigital.cl/__sized__/products/5nobcw1v_e9578faa-thumbnail-255x255-70.jpg',
      stock: 85
    },
    {
      price: 75200,
      name: 'Procesador Intel® Core™ i3-10105F 4 Core 3,7Ghz (6M Cache, Up to 4.4Ghz) LGA1200 Sin Graficos',
      img: 'https://media.spdigital.cl/__sized__/products/o7qh2985_3a15ef22-thumbnail-255x255.png',
      stock: 49
    },
    {
      price: 45870,
      name: 'Memoria Ram DDR4 8GB 3200MHz Kingston FURY Beast Black RGB DIMM, Non-ECC, CL16, 1.35V',
      img: 'https://media.spdigital.cl/__sized__/products/fvsny0kv_08c4d3b6-thumbnail-255x255-70.jpg',
      stock: 70
    },
    {
      price: 29990,
      name: 'Gabinete Gamer Cooler Master Masterbox MB400L, Panel Frontal Cepillado, Vidrio Templado, Micro-ATX ',
      img: 'https://media.spdigital.cl/__sized__/products/dw55of0x_0b6ea411-thumbnail-255x255.png',
      stock: 7
    },
    {
      price: 35300,
      name: 'Memoria Ram DDR4 8GB 2666MHz Kingston SO-DIMM, Single Rank, Unbuffered, 1.2V',
      img: 'https://media.spdigital.cl/__sized__/products/jw9n_i72_722b2614-thumbnail-255x255-70.jpg',
      stock: 27
    },
    {
      price: 4990,
      name: 'Pasta Térmica Disipadora para CPU AeroCool COG 4G',
      img: 'https://media.spdigital.cl/__sized__/products/ky5rmtgr_fc29f55d-thumbnail-255x255.png',
      stock: 28
    },
    {
      price: 220990,
      name: 'Procesador AMD RYZEN 5 3600 6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W, Sin Graficos',
      img: 'https://media.spdigital.cl/__sized__/products/m60rmbx2_d4ccb979-thumbnail-255x255.png',
      stock: 71
    },
    {
      price: 139990,
      name: 'Tarjeta de video Radeon ASRock Phantom Gaming RX 550, 2GB, GDDR5, 128-Bit, PCI-e 3.0',
      img: 'https://media.spdigital.cl/__sized__/products/6lk9yj6a_f057720e-thumbnail-255x255-70.jpg',
      stock: 43
    },
    {
      price: 36990,
      name: 'Fuente de Poder Corsair VS600, 600W, Certificada 80+ Plus White, No modular, ATX',
      img: 'https://media.spdigital.cl/__sized__/products/g411_cxq_bbfc7c05-thumbnail-255x255.png',
      stock: 6
    },
    {
      price: 36980,
      name: 'Gabinete Gamer Thermaltake Versa T25 TG, Vidrio Templado, Mid-Tower, ATX, Micro-ATX, Mini-ITX',
      img: 'https://media.spdigital.cl/__sized__/products/deomukb5_7d64f99f-thumbnail-255x255-70.jpg',
      stock: 9
    },
    {
      price: 84990,
      name: 'Placa Madre ASRock B550M-HDV, Socket AM4 AMD Ryzen, PCIe 4.0, micro ATX',
      img: 'https://media.spdigital.cl/__sized__/products/6o2ogn96_6bd80150-thumbnail-255x255-70.jpg',
      stock: 69
    },
    {
      price: 47990,
      name: 'Disipador de Procesador be quiet! SHADOW ROCK 3, 5 high-performance 6mm heatpipes',
      img: 'https://media.spdigital.cl/__sized__/products/4vy4c5ns_05841a3d-thumbnail-255x255.png',
      stock: 57
    },
    {
      price: 97990,
      name: 'Enfriamiento Líquido AIO NZXT Kraken 120 RGB, 120mm Intel y AMD, Listo para LGA1700',
      img: 'https://media.spdigital.cl/__sized__/products/lxy8y7cg_b3875a91-thumbnail-255x255-70.jpg',
      stock: 36
    },
    {
      price: 121990,
      name: 'Placa Madre ASRock B560M Pro4/ac+, Socket LGA1200, Factor Micro ATX, PCIe 4.0, WiFi&Bluetooth',
      img: 'https://media.spdigital.cl/__sized__/products/13_ins7n_3a581b71-thumbnail-255x255.png',
      stock: 54
    },
    {
      price: 41620,
      name: 'Memoria Ram DDR4 8GB 3200MHz Kingston FURY Beast DIMM, Unbuffered, CL16, 1.35V',
      img: 'https://media.spdigital.cl/__sized__/products/2tdpukwa_7ad5296f-thumbnail-255x255-70.jpg',
      stock: 2
    },
    {
      price: 97990,
      name: 'Unidad Estado Solido Kingston NV1, 1TB, NVMe PCIe Gen 3.0 2280, Lectura 2100MB/s, Escritura 1700MB/s',
      img: 'https://media.spdigital.cl/__sized__/products/m5_jc0go_33d6b783-thumbnail-255x255-70.jpg',
      stock: 89
    },
    {
      price: 76970,
      name: 'Placa Madre ASUS PRIME H310M-E LGA 1151-v2 (8va Gen) Intel H310 HDMI SATA 6Gb/s USB 3.1 Micro ATX',
      img: 'https://media.spdigital.cl/__sized__/products/sw8g9h69_c354d1a4-thumbnail-255x255-70.jpg',
      stock: 99
    },
    {
      price: 42990,
      name: 'Memoria Ram DDR4 8GB 3200MHz Kingston FURY Impact SO-DIMM, Non-ECC, CL20, 1.2V',
      img: 'https://media.spdigital.cl/__sized__/products/ms_taz11_890922c0-thumbnail-255x255-70.jpg',
      stock: 75
    },
    {
      price: 283980,
      name: 'Procesador AMD Ryzen 5 5600G, 6-Core, 3,6Ghz (Max Boost 4,4Ghz), Socket AM4, Radeon Vega Graphics',
      img: 'https://media.spdigital.cl/__sized__/products/ghbmj_9g_9ac91f35-thumbnail-255x255-70.jpg',
      stock: 23
    },
    {
      price: 33990,
      name: 'Fuente de Poder Sharkoon SHP650 V2, 650W, No Modular, Certificada 80+ Plus White',
      img: 'https://media.spdigital.cl/__sized__/products/pvexzd24_6699753a-thumbnail-255x255-70.jpg',
      stock: 98
    },
    {
      price: 211570,
      name: 'Gabinete Gamer MSI MPG Sekira 500X, Full Tower, Vidrio Templado, E-ATX/micro-ATX/Mini-ITX',
      img: 'https://media.spdigital.cl/__sized__/products/5imy2htc_6651cf3c-thumbnail-255x255-70.jpg',
      stock: 43
    },
    {
      price: 6990,
      name: 'Cable Splitter Cooler Master 1-to-3 ARGB Trident Fan',
      img: 'https://media.spdigital.cl/__sized__/products/08mngya__32af5b5d-thumbnail-255x255-70.jpg',
      stock: 14
    },
    {
      price: 449990,
      name: 'Tarjeta de Video PNY GeForce RTX 3050 Uprising Dual, 8GB, 128-Bit, GDDR6, PCI-e 4.0, HDMI, DP ',
      img: 'https://media.spdigital.cl/__sized__/products/tdv08ik0_29a107a3-thumbnail-255x255.png',
      stock: 95
    },
    {
      price: 4990,
      name: 'Pasta Térmica ID-Cooling TG15',
      img: 'https://media.spdigital.cl/__sized__/products/kqj36kyr_a3878277-thumbnail-255x255.png',
      stock: 97
    },
    {
      price: 24990,
      name: 'Gabinete Gamer Aerocool Streak, Mid-Tower, RGB, Vidrio Templado, ATX, MicroATX, Mini-ITX',
      img: 'https://media.spdigital.cl/__sized__/products/1bh12ghg_622875c8-thumbnail-255x255.png',
      stock: 48
    },
    {
      price: 179980,
      name: 'Procesador Intel® Core™ i5-10400 6-Core 2.9 GHz (12M Cache, up to 4.30 GHz) LGA1200 65W',
      img: 'https://media.spdigital.cl/__sized__/products/ispzb71k_2e51a77b-thumbnail-255x255-70.jpg',
      stock: 47
    },
    {
      price: 69990,
      name: 'Disipador de Procesador be quiet! DARK ROCK 4, 6 high-performance copper 6mm heat pipes',
      img: 'https://media.spdigital.cl/__sized__/products/soz3u352_ccf31875-thumbnail-255x255-70.jpg',
      stock: 67
    },
    {
      price: 73300,
      name: 'Placa Madre ASUS Prime A520M-K AM4 AMD Ryzen A520, SATA 6Gb/s, M.2, HDMI, VGA, Micro-ATX, DDR4      ',
      img: 'https://media.spdigital.cl/__sized__/products/wpzwy9pl_93fbbe16-thumbnail-255x255-70.jpg',
      stock: 9
    },
    {
      price: 300990,
      name: 'Enfriamiento Líquido NZXT Kraken Z73, 360mm 120mm x 3, RGB, Pantalla LCD, Intel y AMD',
      img: 'https://media.spdigital.cl/__sized__/products/3jwvz6mb_4dce02ac-thumbnail-255x255-70.jpg',
      stock: 74
    },
    {
      price: 124920,
      name: 'Placa Madre ASUS TUF Gaming B460M-Plus WIFI, Socket LGA1200, DDR4 2933MHz, M.2 x2, RGB, MicroATX',
      img: 'https://media.spdigital.cl/__sized__/products/xql8s3zz_c21af44a-thumbnail-255x255.png',
      stock: 28
    },
    {
      price: 46990,
      name: 'Gabinete Gamer be quiet! Pure Base 500 Window Metallic Gray, ATX, M-ATX, Mini-ITX',
      img: 'https://media.spdigital.cl/__sized__/products/s1veplrh_a2a777af-thumbnail-255x255.png',
      stock: 33
    },
    {
      price: 36990,
      name: 'Memoria Ram DDR4 8GB 3200MHz Geil Evo Potenza Black, UDIMM, CL16, 1.2V',
      img: 'https://media.spdigital.cl/__sized__/products/q_ws2jzn_d9906ed7-thumbnail-255x255-70.jpg',
      stock: 22
    },
    {
      price: 53990,
      name: 'Unidad de Estado Sólido Kingston NV1, 500GB, NVMe M.2, Lectura 2100MB/s Escritura 1700MB/s',
      img: 'https://media.spdigital.cl/__sized__/products/czbvz1fj_1659ceda-thumbnail-255x255-70.jpg',
      stock: 74
    },
    {
      price: 81980,
      name: 'Memoria Ram DDR4 16GB 3200MHz Kingston Fury Impact, SO-DIMM, CL20, 1.2V ',
      img: 'https://media.spdigital.cl/__sized__/products/2ugauqge_a78bd3c0-thumbnail-255x255-70.jpg',
      stock: 13
    },
    {
      price: 252990,
      name: 'Placa Madre Intel® Z590 UD AC, Socket LGA 1200, Quad-GPU & 2-Way CrossFire, Factor ATX',
      img: 'https://media.spdigital.cl/__sized__/products/iks25fv6_b48a39e5-thumbnail-255x255-70.jpg',
      stock: 78
    },
    {
      price: 44980,
      name: 'Fuente de Poder Aerocool Cylon 700W, 230VAC, No Modular, Certificada 80+ Plus White',
      img: 'https://media.spdigital.cl/__sized__/products/e5689ggz_cfcf14ad-thumbnail-255x255.png',
      stock: 10
    },
    {
      price: 178260,
      name: 'Disco Duro 8TB para PC Seagate BarraCuda 3.5", 5400RPM, 256MB Cache, SATA 6.0Gb/s',
      img: 'https://media.spdigital.cl/__sized__/products/q6lkrjq5_54a8cba7-thumbnail-255x255-70.jpg',
      stock: 48
    },
    {
      price: 119990,
      name: 'Procesador Intel Core i3-12100F Alder Lake, LGA 1700, 4 Core/8 Thread, 3.30/4.30 GHz, Sin Gráficos',
      img: 'https://media.spdigital.cl/__sized__/products/b0j2l40g_16c07c2e-thumbnail-255x255-70.jpg',
      stock: 99
    },
    {
      price: 18680,
      name: 'Tarjeta de Red PCI Express de 1 Puerto Gigabit Ethernet RJ45 - Adaptador NIC PCI-e - Perfil Bajo',
      img: 'https://media.spdigital.cl/__sized__/products/_5zemlng_cc9cf34e-thumbnail-255x255-70.jpg',
      stock: 79
    },
    {
      price: 382990,
      name: 'Procesador AMD Ryzen 7 5700G, 8-Core, 3,8Ghz (Max boost 4.6Ghz), Socket AM4, Radeon Vega Graphics',
      img: 'https://media.spdigital.cl/__sized__/products/ynda778y_2fd71e8b-thumbnail-255x255-70.jpg',
      stock: 50
    },
    {
      price: 1144400,
      name: 'Tarjeta de Video MSI Radeon RX 6800 XT GAMING X TRIO, 16GB GDDR6, PCIe 4.0, Soporte CrossFireX',
      img: 'https://media.spdigital.cl/__sized__/products/97dvdzpn_493ca4bc-thumbnail-255x255-70.jpg',
      stock: 71
    },
    {
      price: 16980,
      name: 'Disipador de procesador Thermaltake UX100 ARGB, 120mm, 1800RPM, RGB, Socket Intel, AMD, 5V',
      img: 'https://media.spdigital.cl/__sized__/products/v30tjsqy_7e82197c-thumbnail-255x255-70.jpg',
      stock: 20
    },
    {
      price: 369990,
      name: 'Tarjeta de video Zotac GeForce GTX 1650 AMP, 4GB, GDDR6, 128-Bit, HDMI',
      img: 'https://media.spdigital.cl/__sized__/products/ebkd3go2_8935d424-thumbnail-255x255-70.jpg',
      stock: 77
    },
    {
      price: 74990,
      name: 'Placa Madre MSI A520M-A Pro AM4 AMD A520 SATA 6Gb/s Micro ATX',
      img: 'https://media.spdigital.cl/__sized__/products/udt3fqxu_27f2e082-thumbnail-255x255-70.jpg',
      stock: 71
    },
    {
      price: 29990,
      name: 'Gabinete Gamer Fractal Gaming FOCUS G BLACK ATX, MATX, ITX',
      img: 'https://media.spdigital.cl/__sized__/products/kkks4ll1_d6e70ee2-thumbnail-255x255-70.jpg',
      stock: 20
    },
    {
      price: 220560,
      name: 'Placa Madre ASUS TUF GAMING X570-Plus, AM4, Ryzen, PCIe 4.0, Dual M.2, HDMI, DP',
      img: 'https://media.spdigital.cl/__sized__/products/bcs7vstd_dc0e8d87-thumbnail-255x255-70.jpg',
      stock: 14
    }
  ]
};
(async () => {
  await prisma.productos.createMany(products);
})();
