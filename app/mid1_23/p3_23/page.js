'use client';
import { getTours } from '@/lib/db-tour';
import { tours_xx } from '@/components/mid1_xx/p2_xx/tours_data_xx';
import Wrapper from '@/styles/wrappers/mid1_xx/Tours';
import Tour_xx from '@/components/mid1_xx/p2_xx/Tour_xx';

export default async function Mid1P2Page_xx() {
  const tours_sup = await getTours();
  console.log('p3_23: tours_sup', tours_sup);
  return (
    <Wrapper>
      <section>
        <div class='title'>
          <h2>our tours 912410023 supabbase </h2>
          <div class='underline'></div>
        </div>
        {tours_sup.map((tour) => {
          const { id, img, name, price, info, remote_img } = tour;
          return (
            <Tour_xx
              key={id}
              img={img}
              name={name}
              price={price}
              info={info}
              remote_img={remote_img}
            />
          );
        })}
      </section>
    </Wrapper>
  );
}

/*
'use client';
import { tours_xx } from '@/components/mid1_xx/p2_xx/tours_data_xx';

import TourList_23 from '@/components/mid1_xx/p4_23/TourList_23';
import Wrapper from '@/styles/wrappers/mid1_xx/Tours';
import Tour_xx from '@/components/mid1_xx/p2_xx/Tour_xx';



export default function Mid1P2Page_xx() {
  console.log('p2_xx: tours_xx', tours_xx);
  return (
    <Wrapper>
      <section>
        <div class='title'>
          <h2>our tours 912410023 json arrays</h2>
          <div class='underline'></div>
        </div>
        {tours_xx.map((tour) => {
          const { id, img, name, price, info } = tour;
          return (
            <Tour_xx key={id} img={img} name={name} price={price} info={info} />
          );
        })}
      </section>
    </Wrapper>
  );
}*/
