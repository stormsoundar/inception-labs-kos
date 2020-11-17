import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'inception-labs-kos';
  current = 0;
  img_list = [
    // 'https://mma.prnewswire.com/media/1154723/KOS_PROTEIN_CHOCOLATE.jpg?p=publish',
    'https://cdn.shopify.com/s/files/1/2236/0863/products/kos-chocolate-main_1012x.png?v=1597195781',
    'https://i.pinimg.com/originals/39/89/8d/39898ded161f3f86003e5cd6e139a914.png',
    'https://cdn.shopify.com/s/files/1/2236/0863/products/psylliumhusk_2048x_900e0f57-9b8a-42dc-adda-1c79cd3d15ad_2047x.png?v=1567087861',
    'https://cdn.shopify.com/s/files/1/2236/0863/files/reds-belt_400x400@2x.png?v=1576522328',
    'https://cdn.shopify.com/s/files/1/2236/0863/products/coconut_milk_2048x_50a96999-5d90-4af1-9e5d-91420c04bba5_2047x.png?v=1567087847',
    'https://cdn.shopify.com/s/files/1/2236/0863/files/greens-belt_400x400@2x.png?v=1576521881',
    'https://cdn.shopify.com/s/files/1/2236/0863/files/slider2_400x400@2x.png?v=1566982626',
    'https://cdn.shopify.com/s/files/1/2236/0863/products/red_reishi_2048x_5a2e34d9-3516-4bfa-860c-09ef1e695fb2_2047x.png?v=1597886016',

  ];

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 3000);
  }
}
