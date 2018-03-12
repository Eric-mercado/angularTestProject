import { Component, OnInit} from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
   
        pageTitle: String = 'Product List'
        imageWidth: number = 50;
        imageMargin: number = 2; 
        listFilte: string = 'cart'; 
        showImage: boolean = false; 

        products: IProduct[] = [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallons capacity",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/2400px/svg_to_png/58471/garden-cart.png",

            },{
                "productId": 5,
                "productName": "Hammer",
                "productCode": "tbx-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price":8.9 ,
                "starRating":4.8 ,
                "imageUrl": "http://openclipart.org/image/2400px/svg_to_png/193438/freehammer.png",
            }
        ]; 

        toggleImage(): void{
            this.showImage = !this.showImage; 
        }

        ngOnInit(): void {
            console.log('initiating');
        }
}