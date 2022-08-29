// import img1 from "../../public/assets/DSC_0090.jpg";
// import img2 from "../../public/assets/IMG_01922.jpg";
// import img3 from "../../public/assets/PUT_cz1_513.jpg";
// import img4 from "../../public/assets/IMG_0053.jpg";

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import photographyData from "../data/data.json";

const SectionContent = () => {
  let { category } = useParams()

  if (category === undefined) {
    category = photographyData.categories[0]
  }
  // console.log(category)

  // const [selectedCategory, setSelectedCategory] = useState(category)

  // ["sport", "chwile", "pejzaz", "dron"]

  return (
    <>
      {/* <span>{photographyData.images[0].url}</span> */}
      <main>
        <ul className="section__photos">
          {photographyData.images.map((image) => {
            if (image.category === category) {
              return (
                <li className="section__photos__images">
                  <img key={`${image.url}`} src={`${image.url}`} alt={`${image.description}`} />
                </li>
              );
            }
          })}
        </ul>
      </main>
    </>
  );
};

export default SectionContent;

// {this.state.productCategories.categories.map((category) => {
//   return (
//     <Route
//       key={`${category.name}`}
//       path={`${category.name}`}
//       element={
//         <ProductListing
//           category={`${category.name}`}
//         />
//       }
//     />
//   );
// })}
