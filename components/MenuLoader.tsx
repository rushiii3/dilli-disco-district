'use client'

import { useMenuStore } from '@/store/useMenuStore'
import { useEffect } from 'react'

type Props = {
  collections: {
    id: string
    title: string
    handle: string
  }[]
}

const CollectionMenuLoader = ({ collections }: Props) => {
  const setCollectionMenu = useMenuStore((s) => s.setCollectionMenu)

  console.log(collections);
  
  useEffect(() => {
    const menuItems = collections.map((c) => ({
      id: c.id,
      title: c.title,
    //   link: `/collections/${c.handle}`,
      handle: c.handle,
    }))
    return setCollectionMenu(menuItems)
  }, [collections, setCollectionMenu])

  return null
}

export default CollectionMenuLoader
