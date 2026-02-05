import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { CATEGORIES, IMAGES } from '../data/data';
import FilterBar from '../components/FilterBar';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ImageGrid from '../components/ImageGrid';

export default function GalleryPage() {

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [allItems,setAllItems] = useState([]);
    const [activeCats,setActiveCats] = useState(["toutes"]);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        const t = setTimeout(() => {
            if(cancelled) return;
            try {
                setAllItems(IMAGES)
               // throw new Error("Erreur recuperation")
            }catch (e){
                setError("Erreur impossible de charger les images")
            }finally {
                setLoading(false)
            }
        },3000)
        return () => {
            cancelled = true;
            clearTimeout(t)
        }
    },[])

    // selection de categories
    const handleToggleCategory = (cat) => {
        if (cat === "toutes"){
            setActiveCats(["toutes"])
            return;
        }
        setActiveCats(prev => {
            // copie du contenue des categories active ou tableaux vide si c'etait toutes de selectionner
            const base = prev.includes("toutes") ? [] : prev;
            // la categorie recu est deja presente dans mes categorie active
            const exists = base.includes(cat);
            // creation d'un tableau de categorie qui rajoutera si categorie recu n'est pas presente et retira si deja presente
            const next = exists ? base.filter(c => c !== cat) : [...base,cat]
            // si on a supprimer toutes le categories on repasse en mode toutes
            return next.length === 0 ? ["toutes"] : next

        })
    }

    // liste filtre
    let filtered;
    if(activeCats.includes("toutes")){
        filtered = allItems;
    }else {
        filtered = allItems.filter(item => item.categories.some(c => activeCats.includes(c)))
    }

  return (
    <div className='page'>
        <header className='header'>
            <h1>Galerie d'images</h1>
            <p className='subtitle'>Filtre par categories</p>
        </header>
        <FilterBar categories={CATEGORIES} activeCats={activeCats} onToggle={handleToggleCategory}/>

        {loading ? (
            <Loading />
        ) : error ? (
            <EmptyState message={error} />
        ) : filtered.length === 0 ? (
            <EmptyState message="Aucune image pour les filtres choisie" />
        ) : (
            <ImageGrid items={filtered} />
        )

        }
    </div>
  )
}
