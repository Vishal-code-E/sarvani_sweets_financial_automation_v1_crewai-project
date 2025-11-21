interface PageHeaderProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
}

export default function PageHeader({
    title,
    description,
    action,
}: PageHeaderProps) {
    return (
        <div className="flex items-start justify-between mb-8">
            <div>
                <h1 className="text-3xl font-serif font-semibold text-black">
                    {title}
                </h1>
                {description && (
                    <p className="mt-2 text-sm text-gray-600">{description}</p>
                )}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}
