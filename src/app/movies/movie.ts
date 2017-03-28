import { Moviecast } from "../shared/moviecast";

export class Movie {
    constructor(public Name, public Description, public imagePath, public Moviecast: Moviecast[]) {}
}
