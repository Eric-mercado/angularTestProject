import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'

})
export class ProductListComponent {
        pageTitle: String = 'Product List'
        products: any[] = [
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
        ]
}