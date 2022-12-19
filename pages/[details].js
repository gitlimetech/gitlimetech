import React from 'react';
import { useRouter } from 'next/router';
import { withTranslation } from '../i18n';

function Details() {
    const { query } = useRouter();
    // const { t } = props;
    return (
      <div>
        <h2>information {query.details} information</h2>
      </div>
    );
}

// Details.propTypes = {
//     t: PropTypes.func.isRequired
// };

export default withTranslation(['common'])(Details);
