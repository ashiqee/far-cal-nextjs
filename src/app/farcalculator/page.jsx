import CalculateForm from '@/components/FarCalculate/CalculateForm';
import DashboardNavBar from '@/components/Shared/dashboard/NavBar/DashboardNavBar';
import React from 'react';

const FarCalculatePage = () => {
    return (
        <div>
            <DashboardNavBar/>
                <h2 className="text-xl pt-10 lg:text-3xl text-center">
          জমি এর অবস্থান, রাস্তা এবং ক্ষেত্রফল সংক্রান্ত তথ্য
        </h2>

        <CalculateForm />
        </div>
    );
};

export default FarCalculatePage;