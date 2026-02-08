/**
 * OWNER: DYNAMIC (Dev B)
 * Search Button that opens the search modal
 */
import { useState } from 'react';
import SearchModal from './SearchModal';

export default function SearchButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Search articles"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

