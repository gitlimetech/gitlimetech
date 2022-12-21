import React from 'react';
import { withTranslation } from '../i18n';

function ApplicationDeployment() {
    return (
      <div>
        <h2>Application Deployment And Maintenance realated info will be here</h2>
      </div>
    );
}
ApplicationDeployment.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(ApplicationDeployment);
