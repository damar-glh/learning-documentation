let dataProduct = {
    priceMax : 50,
    product : [
        {
            name: "ROG Zephyrus G14 GA401",
            description: "Styled in metallic Eclipse Gray or pearlescent Moonlight White, the Zephyrus G14 is a stunner. Its clean aesthetic travels easily from LAN parties to lecture halls, with fine-tuned detailing that puts it in a class of its own. Precision CNC milling creates 6,536 perforations across the aluminum lid for a distinctive dot matrix design. Honeycomb reinforcements add strength with minimal material to keep the chassis light. The magnesium-aluminum alloy deck is fingerprint resistant to keep it looking fresh day to day.",
            price: "60",
            image: "https://th.bing.com/th/id/OIP.iUPhRErHJhGA7zhaA9JONQHaE8?pid=ImgDet&rs=1",
        },
        {
            name: "ROG Zephyrus Duo 16 (2023) GX650",
            description: "Play or create with powerful processors up to AMD Ryzen™ 9 7945HX and laptop GPUs up to NVIDIA®GeForce RTX™ 4090. The Ryzen™ 9 7945HX CPU offers incredible gaming and multitasking performance, letting you stream and render your most intensive projects, while the laptop The RTX™ 4090 GPU guarantees incredible in-game framerates and acceleration for content creation. IR Webcam 1080p offers seamless video recording and security with Windows Hello support. With up to 4TB RAID 0 blazing-fast PCIe®4.0 SSD storage and 64GB DDR5 4800MHz RAM, the 2023 Zephyrus Duo 16 is a multitasking beast and offers speed for all your games and apps.",
            price: "62",
            image: "https://elchapuzasinformatico.com/wp-content/uploads/2021/04/Asus-ROG-Zephyrus-Duo-15-SE-1-1536x1111.jpg",
        },
        {
            name: "ROG Zephyrus M16 (2023) GU604",
            description: "Enjoy portability and versatility without sacrificing the gaming power of Windows 11 Home. ROG Zephyrus M16 speeds through gaming and multitasking with the 13th Gen Intel® Core™ i9-13900H processor. Game more confidently with the NVIDIA® GeForce RTX™ 4080 Laptop GPU. With a dedicated MUX Switch, NVIDIA® Advanced Optimus, and G-SYNC support, every game runs at peak performance without tearing. Move freely to create, stream, and game wherever the mood strikes.",
            price: "43",
            image: "https://www.gizmochina.com/wp-content/uploads/2023/01/Asus-ROG-Zephyrus-G14-2023-1024x713.png",
        }
    ]
}

let app = new Vue({
    el: '#app',
    data: dataProduct
});