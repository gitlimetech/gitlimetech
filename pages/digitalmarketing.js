import React from 'react';
import { withTranslation } from '../i18n';

function DigitalMarketingContent() {
    return (
      <div>
        <h2>Digital Marketing And Content details info will be here</h2>
      </div>
    );
}
DigitalMarketingContent.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(DigitalMarketingContent);
