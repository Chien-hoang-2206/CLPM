import React from 'react';

const ProductCategoryRow = ({ category }) => {
    return (
        <tr>ProductTable
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
};

export default ProductCategoryRow;