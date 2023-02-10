import { faker } from "@faker-js/faker";

export const createComics = () => ({
    name: faker.name.fullName(),
    thumbnail: faker.image.imageUrl()
})

export const createManyComics = (amount: number) => {
    const comics = []
    for (let i = 0; i < amount; i++) {
        comics.push(createComics())
    }

    return comics
}