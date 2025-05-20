import React from "react";

export default function PageHeader({ title, breadcrumb, children }) {
  const renderBreadcrumb = () => {
    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-500">/</span>}
          <span className="text-gray-500">{item}</span>
        </React.Fragment>
      ));
    }
    return <span className="text-gray-500">{breadcrumb}</span>;
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold">{title}</span>
        <div className="flex items-center font-medium space-x-2 mt-2">
          {renderBreadcrumb()}
        </div>
      </div>
      {/* action button */}
        {children && (
            <div id="action-button" className="flex items-center space-x-2">
                {children}
            </div>
        )}
    </div>
  );
}



