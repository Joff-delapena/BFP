import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  // Officers Data
  const [officers, setOfficers] = useState(() => {
    const saved = localStorage.getItem('officers');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        fullName: 'Ricardo M. Santos',
        rank: 'Senior Superintendent',
        position: 'City Fire Marshal',
        category: 'Command Group',
        assignedUnit: 'Station Commander',
        status: 'Active',
        idNumber: 'BFP-CDO-001',
        image: 'https://images.unsplash.com/photo-1731363106135-83fb05b5accb?w=400',
        email: 'r.santos@bfp.gov.ph',
        phone: '(088) 123-4567',
        order: 1
      },
      {
        id: '2',
        fullName: 'Maria Elena C. Reyes',
        rank: 'Senior Inspector',
        position: 'Deputy City Fire Marshal',
        category: 'Command Group',
        assignedUnit: 'Deputy Commander',
        status: 'Active',
        idNumber: 'BFP-CDO-002',
        image: 'https://images.unsplash.com/photo-1755261885071-439d1cb8dfc6?w=400',
        email: 'm.reyes@bfp.gov.ph',
        phone: '(088) 123-4568',
        order: 2
      },
      {
        id: '3',
        fullName: 'Juan Carlos D. Fernandez',
        rank: 'Inspector',
        position: 'Chief, Operations Division',
        category: 'Fire Officers',
        assignedUnit: 'Operations Division',
        status: 'Active',
        idNumber: 'BFP-CDO-003',
        image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?w=400',
        email: 'j.fernandez@bfp.gov.ph',
        phone: '(088) 123-4569',
        order: 3
      },
      {
        id: '4',
        fullName: 'Anna Marie B. Torres',
        rank: 'Inspector',
        position: 'Chief, Prevention Division',
        category: 'Fire Officers',
        assignedUnit: 'Prevention Division',
        status: 'Active',
        idNumber: 'BFP-CDO-004',
        image: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?w=400',
        email: 'a.torres@bfp.gov.ph',
        phone: '(088) 123-4570',
        order: 4
      },
      {
        id: '5',
        fullName: 'Roberto L. Mendoza',
        rank: 'Senior Fire Officer 3',
        position: 'Fire Investigation Officer',
        category: 'Fire Officers',
        assignedUnit: 'Investigation Section',
        status: 'Active',
        idNumber: 'BFP-CDO-005',
        image: 'https://images.unsplash.com/photo-1731363106135-83fb05b5accb?w=400',
        email: 'r.mendoza@bfp.gov.ph',
        phone: '(088) 123-4571',
        order: 5
      },
      {
        id: '6',
        fullName: 'Catherine P. Valdez',
        rank: 'Senior Fire Officer 2',
        position: 'Training Officer',
        category: 'Admin Staff',
        assignedUnit: 'Training Section',
        status: 'Active',
        idNumber: 'BFP-CDO-006',
        image: 'https://images.unsplash.com/photo-1755261885071-439d1cb8dfc6?w=400',
        email: 'c.valdez@bfp.gov.ph',
        phone: '(088) 123-4572',
        order: 6
      },
      {
        id: '7',
        fullName: 'Michael A. Cruz',
        rank: 'Senior Fire Officer 1',
        position: 'Administrative Officer',
        category: 'Admin Staff',
        assignedUnit: 'Administrative Section',
        status: 'Active',
        idNumber: 'BFP-CDO-007',
        image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?w=400',
        email: 'm.cruz@bfp.gov.ph',
        phone: '(088) 123-4573',
        order: 7
      },
    ];
  });

  // Weekly Reports Data
  const [reports, setReports] = useState(() => {
    const saved = localStorage.getItem('reports');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        title: 'Fire Prevention Month Kickoff',
        description: 'BFP CDO launches Fire Prevention Month activities with community seminars and fire drills across all barangays.',
        image: 'https://images.unsplash.com/photo-1609051066485-35aed1040551?w=800',
        date: '2026-02-08',
        category: 'Event'
      },
      {
        id: '2',
        title: 'Successful Fire Drill at Schools',
        description: 'Over 500 students participated in coordinated fire drills conducted by BFP CDO personnel at three major schools.',
        image: 'https://images.unsplash.com/photo-1692085654366-5384c1df9af2?w=800',
        date: '2026-02-05',
        category: 'Training'
      },
      {
        id: '3',
        title: 'Emergency Response Excellence',
        description: 'Quick response team contained residential fire in Carmen area with zero casualties, showcasing professional emergency response.',
        image: 'https://images.unsplash.com/photo-1606613816967-5f4023505b61?w=800',
        date: '2026-02-03',
        category: 'Response'
      },
    ];
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('officers', JSON.stringify(officers));
  }, [officers]);

  useEffect(() => {
    localStorage.setItem('reports', JSON.stringify(reports));
  }, [reports]);

  // Officers CRUD
  const addOfficer = (officer) => {
    const newOfficer = {
      ...officer,
      id: Date.now().toString(),
      order: officers.length + 1
    };
    setOfficers([...officers, newOfficer]);
  };

  const updateOfficer = (id, updatedOfficer) => {
    setOfficers(officers.map(officer => 
      officer.id === id ? { ...officer, ...updatedOfficer } : officer
    ));
  };

  const deleteOfficer = (id) => {
    setOfficers(officers.filter(officer => officer.id !== id));
  };

  // Reports CRUD
  const addReport = (report) => {
    const newReport = {
      ...report,
      id: Date.now().toString(),
    };
    setReports([newReport, ...reports]);
  };

  const updateReport = (id, updatedReport) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, ...updatedReport } : report
    ));
  };

  const deleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  return (
    <DataContext.Provider value={{ 
      officers, 
      addOfficer, 
      updateOfficer, 
      deleteOfficer,
      reports,
      addReport,
      updateReport,
      deleteReport
    }}>
      {children}
    </DataContext.Provider>
  );
}