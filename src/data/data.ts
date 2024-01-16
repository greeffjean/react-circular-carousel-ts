import { faker } from "@faker-js/faker"
import { CustomSlideComponentProps } from "components/CircularCarousel.stories";

export const data = Array.from(Array(10).keys()).map(() => ({ image: faker.image.url() }));
export const custom: CustomSlideComponentProps[] = Array.from(Array(10).keys()).map(
  () => ({
    title: faker.company.name(),
    phrase: faker.company.catchPhrase(),
    avatar: faker.image.urlPicsumPhotos(),
  })
);