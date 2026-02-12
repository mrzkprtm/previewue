/**
 * OWNER: DYNAMIC (Dev B)
 * Search Modal Component for Blog
 */
import { useState, useEffect, useRef } from 'react';

interface SearchResult {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: Props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSearch = async (searchQuery: string) => {
        setQuery(searchQuery);

        if (searchQuery.length < 2) {
            setResults([]);
            return;
        }

        setIsLoading(true);

        // TODO: Replace with actual WP API search
        // For now, simulate search results
        setTimeout(() => {
            setResults([
                {
                    id: 1,
                    title: `Hasil pencarian untuk "${searchQuery}"`,
                    slug: 'sample-post',
                    excerpt: 'Ini adalah contoh hasil pencarian...'
                }
            ]);
            setIsLoading(false);
        }, 300);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Search articles"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-4 p-4 border-b border-slate-200">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Cari artikel..."
                        className="flex-grow text-lg outline-none placeholder-slate-400"
                    />
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Close search"
                    >
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto">
                    {isLoading && (
                        <div className="p-8 text-center text-slate-500">
                            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2" />
                            Mencari...
                        </div>
                    )}

                    {!isLoading && query.length >= 2 && results.length === 0 && (
                        <div className="p-8 text-center text-slate-500">
                            Tidak ada hasil untuk "{query}"
                        </div>
                    )}

                    {!isLoading && results.length > 0 && (
                        <ul className="divide-y divide-slate-100">
                            {results.map((result) => (
                                <li key={result.id}>
                                    <a
                                        href={`/artikel/${result.slug}`}
                                        className="block p-4 hover:bg-slate-50 transition-colors"
                                    >
                                        <h4 className="font-semibold text-gray-900 mb-1">{result.title}</h4>
                                        <p className="text-sm text-slate-500 line-clamp-2">{result.excerpt}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}

                    {!isLoading && query.length < 2 && (
                        <div className="p-8 text-center text-slate-500 text-base">
                            Ketik minimal 2 karakter untuk mencari
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

