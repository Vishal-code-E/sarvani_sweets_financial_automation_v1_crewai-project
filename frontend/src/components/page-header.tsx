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
        <div className="flex items-start justify-between mb-10">
            <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg text-gray-400">{description}</p>
                )}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}
