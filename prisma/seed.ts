import prisma from "../src/database.js";

async function main() {
    await prisma.categories.createMany({
        skipDuplicates: true,
        data: [
            {category: "Anéis"},
            {category: "Brincos"},
            {category: "Pulseiras"},
            {category: "Colares"}
        ]
    })
    await prisma.images.createMany({
        skipDuplicates: true,
        data: [
            {
                url: "https://assets.vtex.app/unsafe/fit-in/92x92/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F158790%2FAnel-Prata-Topazio-Sky-e-Topazios-Incolores-m5720300_set.jpg%3Fv%3D1761432972"
            },
            {
                url:"https://assets.vtex.app/unsafe/fit-in/92x92/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F232995%2FPulseira-Ouro-Amarelo-Citrino-Ametista-Tanzanita-Granada-e-Turmalina-m5870004_set.jpg%3Fv%3D1761256648"
            },
            {
                url: "https://assets.vtex.app/unsafe/fit-in/92x92/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F334618%2FPulseira-Ouro-Amarelo-4539_set.jpg%3Fv%3D1761250616"
            }
        ]
    })
    await prisma.products.createMany({
        skipDuplicates: true,
        data: [
            {title:"Anel Sky",
            description: "Anel de Prata com uma pedra Topázio Sky e duas Topázios Incolores - Vivara",
            price: 36000,
            categoryId: 1,
            imageId: 1
            },
            {title:"Pulseira Ouro",
            description: "Pulseira Ouro Amarelo 18k - Vivara",
            price: 805000,
            categoryId: 3,
            imageId: 3},
            {title:"Pulseira Ametista e Turmalina",
            description: "Pulseira Ouro Amarelo Citrino Ametista Tanzanita Granada e Turmalina - Vivara",
            price: 199000,
            categoryId: 3,
            imageId: 2}
        ]
    })
}

main().then(() => {
    console.log("OK")
}).catch((e) => {
    console.log(e)
    process.exit(1)
}).finally(async() => {
    await prisma.$disconnect()
})


