import React from 'react';
import { withTranslation } from '../i18n';

function Branding() {
    return (
      <div>
        <h2>branding details info will be here</h2>
      </div>
    );
}
Branding.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Branding);
