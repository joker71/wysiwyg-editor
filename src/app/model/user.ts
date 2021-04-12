export class User{
    id: string;
    name: string;
    region: string
    constructor(name: string, region: string, id: string)
    {
        this.region= region;
        this.id= id;
        this.name= name;
    }
}