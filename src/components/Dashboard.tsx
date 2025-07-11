import React from 'react';
import { useLocation } from 'react-router-dom';
import { AlignedSequences } from '../algorithms';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const { alignedSequences } = location.state as { alignedSequences: AlignedSequences };
  const { reference, query, alignment, score } = alignedSequences;

  const gcContentReference = (reference.match(/[GC]/gi)?.length || 0) / reference.length;
  const gcContentQuery = (query.match(/[GC]/gi)?.length || 0) / query.length;

  const alignmentLength = alignment.length;
  const matchPercentage = (score / alignmentLength) * 100;

  const monthlySummaryData = [
    { month: 'Jan', matches: 120 },
    { month: 'Feb', matches: 150 },
    { month: 'Mar', matches: 180 },
    // ... more data
  ];

  const productData = [
    { name: 'Reference GC Content', value: gcContentReference * 100 },
    { name: 'Query GC Content', value: gcContentQuery * 100 },
    { name: 'Match Percentage', value: matchPercentage },
  ];

  const orderData = alignment.map((pair, index) => ({
    index: index + 1,
    reference: pair.reference,
    query: pair.query,
  }));

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">DNA Sequence Analysis Dashboard</h2>

      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-2">{/* Sidebar (placeholder) */}</div>

        <div className="col-span-8">
          {/* Monthly Summary Chart (Placeholder) */}
          <div className="border rounded p-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">Monthly Summary</h3>
            <div className="bg-gray-700 rounded h-48">
              {/* Placeholder for chart visualization */}
              {monthlySummaryData.map((dataPoint) => (
                <div
                  key={dataPoint.month}
                  className="bg-blue-500 h-full inline-block"
                  style={{ width: `${(dataPoint.matches / 300) * 100}%` }} // Example scaling
                ></div>
              ))}
            </div>
          </div>

          {/* Circular Chart and Key Metrics (Placeholder) */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border rounded p-4">
              <div className="bg-gray-700 rounded-full h-48 w-48 relative">
                <div
                  className="bg-blue-500 rounded-full h-32 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `rotate(${matchPercentage * 3.6}deg)` }} // Example rotation
                ></div>
                <div className="text-center mt-4">
                  <span className="text-2xl">+{matchPercentage.toFixed(0)}%</span><br />
                  <span>Match</span>
                </div>
              </div>
            </div>
            <div className="border rounded p-4">{/* Key Metrics (placeholder) */}</div>
          </div>

          {/* Alignment Data */}
          <div className="border rounded p-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">Alignment Data</h3>
            <div>
              {orderData.map((item) => (
                <div key={item.index}>
                  <span>{item.index}: </span>
                  <span>{item.reference}</span>
                  <span>{item.query}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GC Content and Match Percentage */}
          <div className="border rounded p-4">
            <h3 className="text-xl font-semibold mb-2">Metrics</h3>
            <div className="flex justify-around">
              {productData.map((product) => (
                <div key={product.name} className="text-center">
                  <div className="bg-gray-700 rounded-full h-24 w-24 relative">
                    <div
                      className="bg-blue-500 rounded-full h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `rotate(${product.value * 3.6}deg)` }} // Example rotation
                    ></div>
                  </div>
                  <div className="mt-2">
                    <span>{product.name}</span><br />
                    <span>{product.value.toFixed(2)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
