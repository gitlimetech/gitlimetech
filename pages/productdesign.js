import React from 'react';
import { withTranslation } from '../i18n';

function ProductDesign() {
    return (
      <div>
        <h2>Product Design & Development realated info will be here</h2>
      </div>
    );
}
ProductDesign.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(ProductDesign);
