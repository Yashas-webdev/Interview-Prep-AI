// import React from 'react'
import {LuCopy, LuCheck, LuCode} from "react-icons/lu";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHightlighter} from 'react-syntax-highlighter';
import {oneLight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const AIResponsePreview = ({content}) => {
    if(!content) return null;
  return (
    <div className="">
        <div className="">
            <ReactMarkdown 
               remarkPlugins={[remarkGfm]}
               components={{
                p({children}){
                    return <p className="">{children}</p>
                },
                strong({children}){
                    return <strong>{children}</strong>
                },
                em({children}){
                    return <em>{children}</em>
                },
                ul({children}){
                    return <ul className="">{children}</ul>
                },
                ol({children}){
                    return <ol className="">{children}</ol>
                },
                li({children}){
                    return <li className="">{children}</li>
                },
               }}
        </div>
    </div>
  )
}

export default AIResponsePreview