
import DashboardNavBar from '@/components/Shared/dashboard/NavBar/DashboardNavBar';
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