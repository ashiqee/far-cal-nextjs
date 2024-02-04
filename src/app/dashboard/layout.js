
import DashboardNavBar from '@/components/Shared/dashboard/DashboardNavBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
                 <DashboardNavBar/>
            {children}
        </div>
    );
};

export default layout;