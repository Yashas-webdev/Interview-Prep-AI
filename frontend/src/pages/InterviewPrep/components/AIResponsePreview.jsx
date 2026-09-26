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
                blockquote({children}){
                    return <blockquote className="">{children}</blockquote>
                },
                h1({children}){
                    return <h1 className="">{children}</h1>
                },
                h2({children}){
                    return <h2 className="">{children}</h2>
                },
                h3({children}){
                    return <h3 className="">{children}</h3>
                },
                h4({children}){
                    return <h4 className="">{children}</h4>
                },
                a({children}){
                    return <a href={href} className="">{children}</a>
                },
                table({children}){
                    return (
                        <div className="">
                            <table className="">
                                {children}
                            </table>
                        </div>
                    );
                },
                thead({children}){
                    return <thead className="">{children}</thead>
                },
                tbody({children}){
                    return <tbody className="">{children}</tbody>
                },
                tr({children}){
                    return <tr>{children}</tr>
                },
                th({children}){
                    return <th className="">{children}</th>
                },
                td({children}){
                    return <td className="">{children}</td>
                },
                hr() {
                    return <hr className=""></hr>
                },
                img({ src, alt }){
                    return <img src={src} alt={alt} className="" />;
                },
               }}
            >
                {content}
            </ReactMarkdown>
        </div>
    </div>
  )
}

export default AIResponsePreview