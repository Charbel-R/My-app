import React from 'react'

export default function FormatDate() {
  return (
    <div>you can create a function that formats the date to your liking and use it in the app 
      <pre>{`
        export function formatDate(date: Date): string {
          return date.toDateString();
        }
      `
      }</pre>
    </div>
  )
}
