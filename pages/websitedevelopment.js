import React from 'react';
import { withTranslation } from '../i18n';

function WebsiteDevelopment() {
    return (
      <div>
        <h2>Website Development realated info will be here</h2>
      </div>
    );
}
WebsiteDevelopment.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(WebsiteDevelopment);
