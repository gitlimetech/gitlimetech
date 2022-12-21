import React from 'react';
import { withTranslation } from '../i18n';

function ERPDevelopment() {
    return (
      <div>
        <h2>ERP Development realated info will be here</h2>
      </div>
    );
}
ERPDevelopment.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(ERPDevelopment);
