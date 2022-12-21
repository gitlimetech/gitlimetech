import React from 'react';
import { withTranslation } from '../i18n';

function Design() {
    return (
      <div>
        <h2>UI/UX Design details info will be here</h2>
      </div>
    );
}
Design.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Design);
