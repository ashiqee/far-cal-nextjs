import CalculateForm from '@/components/FarCalculate/CalculateForm';
import React from 'react';

const FarCalculatePage = () => {
    return (
        <div>
                <h2 className="text-xl lg:text-3xl text-center">
          জমি এর অবস্থান, রাস্তা এবং ক্ষেত্রফল সংক্রান্ত তথ্য
        </h2>

        <CalculateForm />
        </div>
    );
};

export default FarCalculatePage;