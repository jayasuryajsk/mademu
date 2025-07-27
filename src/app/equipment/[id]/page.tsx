import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, X } from 'lucide-react'
import { demoEquipment } from '@/lib/demo-data'

interface EquipmentDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EquipmentDetailPage({ params }: EquipmentDetailPageProps) {
  const { id } = await params
  
  const equipment = demoEquipment.find(item => item.id === id)
  
  if (!equipment) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/equipment" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Equipment
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {equipment.images && equipment.images[0] && (
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={equipment.images[0]}
                  alt={equipment.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{equipment.name}</h1>
              <Badge variant="secondary" className="mb-4">
                {equipment.categories?.name}
              </Badge>
              <p className="text-gray-600 text-lg">{equipment.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {equipment.available_quantity > 0 ? (
                    <>
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-green-600 font-medium">
                        {equipment.available_quantity} of {equipment.total_quantity} available
                      </span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-600" />
                      <span className="text-red-600 font-medium">Currently unavailable</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {equipment.specifications && Object.keys(equipment.specifications).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 gap-4">
                    {Object.entries(equipment.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="text-gray-600 capitalize">
                          {key.replace(/_/g, ' ')}:
                        </dt>
                        <dd className="font-medium text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            )}

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contact us for pricing and availability information for this equipment.
                </p>
                <div className="space-y-4">
                  <Link href="/contact">
                    <Button className="w-full" size="lg">
                      Get a Quote
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-gray-600">
                    or call us at{' '}
                    <a href="tel:1800PREFER" className="text-primary font-medium hover:underline">
                      1800 PREFER
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}