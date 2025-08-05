import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Shield, ArrowLeft, AlertTriangle } from 'lucide-react'
import deals from '../data/deals'

const CheckoutPage = () => {
  const { dealId } = useParams()
  const deal = deals.find(d => d.id === dealId)
  const [showAlternativePayments, setShowAlternativePayments] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Deal Not Found</h1>
          <p className="text-gray-600 mb-6">The deal you're looking for doesn't exist.</p>
          <Link to="/deals">
            <Button>Browse All Deals</Button>
          </Link>
        </div>
      </div>
    )
  }

  const discountedPrice65 = (65 * 0.85).toFixed(2);
  const discountedPrice37 = (37 * 0.85).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/deals" className="hover:text-blue-600">Deals</Link>
            <span>/</span>
            <Link to={`/deal/${deal.id}`} className="hover:text-blue-600">{deal.name}</Link>
            <span>/</span>
            <span className="text-gray-900">Checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Complete Verification ($65)</CardTitle>
                <CardDescription>
                  Choose your verification option. Remember, one verification grants access to ALL available discounts for a minimum of 12 months.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Full Verification Option */}
                <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete SheerID Verification (Recommended)</h3>
                  <p className="text-gray-600 mb-4">
                    Get verified for ALL SheerID discounts with our professional verification service. Works with any email address and guarantees access to all available student discounts.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Access to ALL 123+ SheerID discounts</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Works with any email (Gmail, Outlook, iCloud, etc.)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100% success guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24-48 hour processing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Valid for 12+ months</span>
                    </div>
                  </div>
                  <a href="https://buy.stripe.com/cNifZig8i74pc1CgkvafS08" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Buy Now ($65)</Button>
                  </a>
                </div>

                <Separator />

                {/* EDU Email Only Option */}
                <div className="border rounded-lg p-6 bg-yellow-50 border-yellow-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">EDU Email Only (Limited Option)</h3>
                      <p className="text-yellow-700 text-sm font-medium">Not recommended - Limited functionality</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    This option only provides an .edu email address. While technically possible, many discounts won't work without proper SheerID verification.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Limited to basic .edu email access only</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Many premium discounts won't work (Nike, Adobe, Spotify Premium, etc.)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>No guarantee for SheerID-specific verifications</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span>May not work with newer discount platforms</span>
                    </div>
                  </div>
                  <a href="https://buy.stripe.com/4gMaEY3lw1K57Lmb0bafS07" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Buy Now ($37)</Button>
                  </a>
                  <div className="mb-4">
                    <Link to="/edu-only" className="text-blue-600 hover:text-blue-800 text-sm underline">
                      Learn more about limitations →
                    </Link>
                  </div>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600" onClick={() => setShowAlternativePayments(!showAlternativePayments)}>
                  Alternative Payment Options (Faster!)
                </Button>

                {showAlternativePayments && (
                  <div className="border rounded-lg p-6 bg-gray-100 border-gray-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative Payment Methods (15% Off)</h3>
                    <p className="text-gray-600 mb-4">These options offer faster processing times as they are instant and come with a 15% discount due to lower processing fees.</p>

                    <div className="space-y-6">
                      {/* Sendwave */}
                      <div className="border rounded-lg p-4 bg-white">
                        <h4 className="font-semibold text-gray-900 mb-2">Sendwave Payment</h4>
                        <p className="text-gray-600 mb-2">For <strong>$65 Premium Verification</strong>: Your discounted price: <strong>${discountedPrice65}</strong></p>
                        <p className="text-gray-600 mb-2">For <strong>$37 EDU Only</strong>: Your discounted price: <strong>${discountedPrice37}</strong></p>
                        <div className="flex justify-center space-x-4 mb-4">
                          <a href="https://sendwave.onelink.me/kjap?af_js_web=true&af_ss_ver=2_7_3&pid=web&c=HomePage&af_channel=web&is_retargeting=true&af_ss_ui=true&af_ss_gtm_ui=true" target="_blank" rel="noopener noreferrer">
                            <img src="/images/google-play-badge.png" alt="Google Play Store" className="h-12" />
                          </a>
                          <a href="https://sendwave.onelink.me/kjap?af_js_web=true&af_ss_ver=2_7_3&pid=web&c=HomePage&af_channel=web&is_retargeting=true&af_ss_ui=true&af_ss_gtm_ui=true" target="_blank" rel="noopener noreferrer">
                            <img src="/images/app-store-badge.png" alt="App Store" className="h-12" />
                          </a>
                        </div>
                        <ol className="list-decimal list-inside text-gray-600 space-y-1">
                          <li>Download the Sendwave app from the App Store or Google Play.</li>
                          <li>Complete the sign-up process within the app.</li>
                          <li>Pick "Kenya" as the country for your first payment, then select "M-PESA" as the payment method.</li>
                          <li>Enter the full name <strong>Abel Ochieng</strong> and mobile number <strong>726040004</strong> as the recipient and proceed.</li>
                          <li>Punch in the exact discounted amount for your chosen option. Review it, and hit send.</li>
                        </ol>
                      </div>

                      {/* Crypto */}
                      <div className="border rounded-lg p-4 bg-white">
                        <h4 className="font-semibold text-gray-900 mb-2">Crypto Payment</h4>
                        <p className="text-gray-600 mb-2"><strong>ETH:</strong> Send the exact discounted amount worth of ETH to the address: <code className="bg-gray-200 p-1 rounded break-all">0xPlaceholderETHAddress</code></p>
                        <div className="flex justify-center mb-2">
                          <img src="/images/eth_qr.png" alt="ETH QR Code" className="w-32 h-32" />
                        </div>

                        <p className="text-gray-600 mb-2"><strong>BTC:</strong> Send the exact discounted amount worth of BTC to the address: <code className="bg-gray-200 p-1 rounded break-all">bc1qPlaceholderBTCAddress</code></p>
                        <div className="flex justify-center mb-2">
                          <img src="/images/btc_qr.png" alt="BTC QR Code" className="w-32 h-32" />
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mt-4">
                        <strong>Important:</strong> After payment, please email <a href="mailto:sheeredudeals@gmail.com" className="text-blue-600 hover:underline">sheeredudeals@gmail.com</a> or text <a href="tel:+13477667259" className="text-blue-600 hover:underline">+1(347)-766-7259</a> with the exact names you want verified.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">


            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>After payment, you'll receive an email with next steps within 24 hours</li>
                  <li>Our service works for both students and non-students</li>
                  <li>We accept any email address (no .edu required for verification)</li>
                  <li>100% money-back guarantee if verification fails</li>
                  <li>Support available at sheeredudeals@gmail.com</li>
                  <li>Get 15% off if you buy with Bitcoin, Crypto or Sendwave (faster and cheaper fees)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage





