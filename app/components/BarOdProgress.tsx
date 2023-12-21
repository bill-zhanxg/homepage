'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const BarOfProgress = () => {
	return <ProgressBar height="5px" color="#3ABFF8" options={{ showSpinner: false }} shallowRouting delay={100} />;
};

export default BarOfProgress;
