// import React from 'react'

const SummaryCard = ({
    colors,
    role,
    topicsToFocus,
    experience,
    questions,
    description,
    lastUpdated,
    onSelect,
    onDelete, 
}) => {
  return (
    <div className="bg-white border border-gray-300/40 rounded-xl p-2 overflow-hidden cursor-pointer hover: shadow-xl shadow-gray-100 relative relative group"
      onClick={onSelect}
    >
        <div 
          className="rounded-lg p-4 cursor-pointer relative"
          style={{
            background: colors.bgcolor,
          }}
        >
            <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold text-black">
                        GU
                    </span>
                </div>

                {/* Content Contaier */}
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        {/* Title and Skills */}
                        <div>
                            <h2 className="text-[17px] font-medium">{role}</h2>
                            <p className="text-xs text-medium text-gray-900">
                                {topicsToFocus}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <button 
               className="hidden group-hover:flex items-center gap-2 text-rose-500 font-medium bg-rose-50 px-3 py-1 rounded text-nowrap border border-rose-100 hover:border-rose-200 cursor-pointer absolute top-0 right-0"
               onClick={(e) => {
                 e.stopPropagation();
                 onDelete();
               }}
            >
                delete
            </button>
        </div>

        <div className="">
            <div className="">
                <div className="">
                   Experience: {experience} {experience == 1 ? "Year" : "Years"} 
                </div>

                <div className ="">
                    {questions} Q&A
                </div>

                <div className="">
                    Last Updated: {lastUpdated}
                </div>
            </div>

            {/* Description */}
            <p className="">
                {description}
            </p>
        </div>
    </div>
  )
}

export default SummaryCard