import prisma from "../src/database.js";

async function main() {
    await prisma.categories.createMany({
        skipDuplicates: true,
        data: [
            {category: "Anéis"},
            {category: "Brincos"},
            {category: "Pulseiras"}
        ]
    })
    await prisma.products.createMany({
        data: [
            {title:"Anel Sky",
            description: "Anel de Prata com uma pedra Topázio Sky e duas Topázios Incolores - Vivara",
            price: 36000,
            categoryId: 1}
        ]
    })
    await prisma.images.createMany({
        data: [
            {productId: 1,
            url: "https://assets.vtex.app/unsafe/fit-in/92x92/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F158790%2FAnel-Prata-Topazio-Sky-e-Topazios-Incolores-m5720300_set.jpg%3Fv%3D1761432972"}
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


