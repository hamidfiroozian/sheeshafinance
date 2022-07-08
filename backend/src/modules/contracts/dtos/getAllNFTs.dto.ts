export class NFTDto {
  name!: string;

  description!: string;

  image: string;

  owner: string;
  seller: string;
  tokenId: number;
  itemId: number;

  price: string;

  collectionAddress: string;

  sold: boolean;
}
