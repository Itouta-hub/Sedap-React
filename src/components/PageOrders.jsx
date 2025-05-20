export default function PageOrders({ title, breadcrumb, children }) {
    const renderBreadcrumb = () => {
        if (!breadcrumb) return null;

        if (typeof breadcrumb === "string") {
            return <span className="text-gray-500">{breadcrumb}</span>;
        }

        if (Array.isArray(breadcrumb)) {
            return breadcrumb.map((item, index) => (
                <span key={index} className="text-gray-500 flex items-center">
                    {index !== 0 && <span className="mx-2">/</span>}
                    {item}
                </span>
            ));
        }

        return null;
    };

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            {/* Title & Breadcrumb */}
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">{title}</span>
                <div id="breadcrumb-links" className="flex items-center font-medium mt-2">
                    {renderBreadcrumb()}
                </div>
            </div>

            {/* Action Buttons */}
            {children && (
                <div id="action-button" className="flex items-center space-x-2">
                    {children}
                </div>
            )}
        </div>
    );
}
