export type Menu = {
    name: string,
    price: number,
    desc: string
}

export const menu: Array<Menu> = [
    {
        name: "toast",
        price: 6,
        desc: "Sourdough - White, Multigrain Turkish Bread, Milk Bun, Gluten Free, Raisin Choice of Spread: Butter, Vegemite, Peanut Butter, Strawberry Jam"
    },
    {
        name: "grilled toastie",
        price: 8,
        desc: "Cheese & Tomato - $8- $8 Ham & Cheese - $8- $8 Ham, Cheese & Tomato - $9- $9 on sourdough bread"
    },
    {
        name: "corissant",
        price: 9,
        desc: "Plain w/ Jam & Butter - $6- $6 Double Smoked Ham & Swiss Cheese - $9- $9 Truffle Mushroom & Goats Cheese - $11- $11 add 2 eggs -- $5$5 add fresh rocket -- $3$"
    },
    {
        name: "basic",
        price: 12,
        desc: "2 free range eggs your way w/ sourdough"
    },
    {
        name: "blat",
        price: 17,
        desc: "bacon, lettuce, avocado, tomato & aioli sauce - served on turkish flat brea"
    },
    {
        name: "bacon & egg roll",
        price: 16,
        desc: "fried eggs, crispy bacon, rocket & bbq aioli sauce - served on turkish flat bread"
    },
    {
        name: "avo & feta smash",
        price: 15,
        desc: "avocado, feta cheese, sliced lemon & drizzled balsamic - served on wholegrain sourdough"
    },
]

const fetchMenu = async () => {
    console.log("server",menu)
    return menu
}

export { fetchMenu }
