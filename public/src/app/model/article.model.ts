export class Article {
  public title            : string;
  public description      : string;
  public localisation     : number;
  public price            : number;
  public image            : string;
  public user             : any;
  public create_at        : Date;
  public update_at        : Date;

  constructor(title, description, localisation, price, image, user){
    this.title = title;
    this.description = description;
    this.localisation = localisation;
    this.price = price;
    this.image = image;
    this.user = user;
  }

}
