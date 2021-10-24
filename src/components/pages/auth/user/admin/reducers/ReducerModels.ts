export interface StateProps {
  id: string;
  title: string;
  price: number;
  quantity?: number;
  stockQuantity: number;
  isAvailable?: boolean;
  category: string | null;
  image: string;
}

export interface ActionProps {
  type: string;
  payload: StateProps;
}
