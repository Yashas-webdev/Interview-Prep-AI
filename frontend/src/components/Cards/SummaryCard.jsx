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
    <div className=""
      onClick={onSelect}
    >
        <div 
          className=""
          style={{
            background: colors.bgcolor,
          }}
        >
            <div className="">
                <div className="">
                    <span className="">
                        GU
                    </span>
                </div>

                {/* Content Contaier */}
                <div className="">
                    <div className="">
                        {/* Title and Skills */}
                        <div>
                            <h2 className="">{role}</h2>
                            <p className="">
                                {topicsToFocus}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <button 
               className=""
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
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SummaryCard