import React , { Fragment } from 'react';
import materialize from 'materialize-css';
import spinner from '../../../public/images/spinner.gif';

const Spinner = () =>

        <Fragment>
            <img src={spinner} alt="Loading ..." style={{ width:'200px', margin:'auto', display:'block'  }} />
        </Fragment>

export default Spinner
