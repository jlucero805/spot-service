import { z } from 'zod';

export const PropertySchema = z.object({
    id: z.string().optional(),
    location: z.string(),
});

type Property = z.infer<typeof PropertySchema>;

export default Property;