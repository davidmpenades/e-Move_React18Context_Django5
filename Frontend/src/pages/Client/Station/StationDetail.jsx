import React, { useState } from "react";
import StationCard from "../../../component/Rent/StationCard";
import { useLocation } from "react-router-dom";
export default function StationDetail() { 
    const location = useLocation();
    const { stationId } = location.state;
    
    return (
        <>
            <StationCard state={stationId}/>
        </>
    );
}
