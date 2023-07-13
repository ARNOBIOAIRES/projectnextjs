import Link from 'next/link'

export default function Faq() {
    return ( 
      <div>
        <h1 className="text-4xl">Faq you Page</h1>
        <p className="py-10">This is our FAQ Page, consectetur adipiscing elit.
         Proin id nibh urna. Aenean mi elit, dapibus sed sapien eu, blandit pretium eros.
         Mauris fermentum quis orci eget rhoncus. Nullam tempor turpis eu lobortis porttitor.
         Quisque tristique orci id libero viverra, et dignissim neque fermentum. Vivamus quis lectus nunc. Fusce porta a odio in sodales. Fusce vitae malesuada ante. Fusce elementum posuere lectus, non condimentum massa fringilla sed. Mauris pulvinar elit a nisl egestas consectetur. Donec ullamcorper elit aliquam orci euismod, vel cursus mi finibus. Sed pharetra turpis in lectus faucibus, nec dictum metus egestas. Mauris interdum sed tellus id pharetra. Phasellus consequat ac erat at vulputate. Sed varius, ligula nec congue eleifend, ligula augue molestie nulla, a lobortis mauris ante eget turpis.

        </p>
     
      
        <Link href="/about">About</Link>
    </div>
    )
}