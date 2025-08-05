import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, AlertTriangle, X, ArrowLeft } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const EduOnlyPage = () => {
  const [showAlternativePayments, setShowAlternativePayments] = useState(false)
  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const discountedPrice65 = (65 * 0.85).toFixed(2);
  const discountedPrice37 = (37 * 0.85).toFixed(2);

  return (
    <>
      <SEOHead 
        title="EDU Email Only Service - StudentVerify powered by sheerid.fastdiscountfinder.com"
        description="Learn about our EDU email only service and why complete SheerID verification is recommended for accessing student discounts."
        canonicalUrl="https://sheerid.fastdiscountfinder.com/edu-only"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <span className="text-gray-900">EDU Email Only</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-yellow-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">EDU Email Only Service</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While we can provide .edu email access, we strongly recommend our complete SheerID verification service for the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* What You Get */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>EDU Email Only ($37)</span>
                </CardTitle>
                <CardDescription>Limited functionality - not recommended</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Access to a .edu email address</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Basic student email verification</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <X className="h-4 w-4" />
                  <span>No SheerID verification included</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <X className="h-4 w-4" />
                  <span>Limited discount access</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <X className="h-4 w-4" />
                  <span>No guarantee for premium brands</span>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Option */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Complete Verification ($65)</span>
                </CardTitle>
                <CardDescription>Recommended - Full access guaranteed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Professional SheerID verification</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Access to ALL 123+ discounts</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Works with any email address</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% success guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Valid for 12+ months</span>
                </div>
                <a href="https://buy.stripe.com/cNifZig8i74pc1CgkvafS08" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Buy Now ($65)</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Comparison */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Detailed Comparison</CardTitle>
              <CardDescription>
                See exactly what works with each option
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="text-center py-3 px-4 text-yellow-600">EDU Only ($37)</th>
                      <th className="text-center py-3 px-4 text-green-600">Complete ($65)</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Nike Student Discount</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Adobe Creative Cloud</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Spotify Premium</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Amazon Prime Student</td>
                      <td className="text-center py-3 px-4">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mx-auto" title="May work" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Microsoft Office 365</td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Apple Music Student</td>
                      <td className="text-center py-3 px-4">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mx-auto" title="May work" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">SheerID-Verified Brands</td>
                      <td className="text-center py-3 px-4">
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Why We Don't Recommend EDU Only */}
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700">Why We Don't Recommend EDU Email Only</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">Limited Brand Access</h4>
                    <p className="text-red-600 text-sm">Most premium brands (Nike, Adobe, Spotify) require SheerID verification, not just .edu emails.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">Verification Failures</h4>
                    <p className="text-red-600 text-sm">Many platforms now check if the .edu email is from an active student, which basic .edu access cannot guarantee.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">No Support Guarantee</h4>
                    <p className="text-red-600 text-sm">If discounts don't work with EDU-only access, we cannot provide the same level of support or guarantees.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">Evolving Requirements</h4>
                    <p className="text-red-600 text-sm">More companies are moving to SheerID verification, making .edu-only access increasingly obsolete.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700">EDU Email Only</CardTitle>
                <CardDescription>Limited functionality - $37</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Only choose this if you understand the limitations and still want to proceed.
                </p>
                <a href="https://buy.stripe.com/4gMaEY3lw1K57Lmb0bafS07" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Buy Now ($37)</Button>
                </a>
                <Button className="w-full bg-green-500 hover:bg-green-600 mt-4" onClick={() => setShowAlternativePayments(!showAlternativePayments)}>
                  Alternative Payment Options (Faster!)
                </Button>
              </CardContent>
            </Card>

            {showAlternativePayments && (
              <Card className="mb-8 border-gray-300 bg-gray-100">
                <CardHeader>
                  <CardTitle>Alternative Payment Methods</CardTitle>
                  <CardDescription>These options offer faster processing times as they are instant.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Sendwave for $37 */}
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Sendwave Payment ($37 EDU Only)</h4>
                    <p className="text-gray-600 mb-2">Get 15% off when paying with Sendwave! This is due to lower processing fees, allowing us to pass the savings to you. Your discounted price is: <strong>${(37 * 0.85).toFixed(2)}</strong></p>
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
                      <li>Punch in <strong>${(37 * 0.85).toFixed(2)}</strong>. Review it, and hit send.</li>
                    </ol>
                  </div>

                  {/* Crypto for $37 */}
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Crypto Payment ($37 EDU Only)</h4>
                    <p className="text-gray-600 mb-2">Get 15% off when paying with Crypto! This is due to lower processing fees, allowing us to pass the savings to you. Your discounted price is: <strong>${(37 * 0.85).toFixed(2)}</strong></p>
                    <p className="text-gray-600 mb-2"><strong>BTC:</strong> Send the exact discounted amount worth of BTC to the address: <code className="bg-gray-200 p-1 rounded break-all">bc1qashe27a9sk3ady5f2h5j7q0h6l4t8v39ycekld</code></p>
                    <div className="flex justify-center mb-2">
                      <img src="/images/btc_qr.png" alt="BTC QR Code" className="w-32 h-32" />
                    </div>
                    <div className="flex justify-center mb-2">
                      <img src="/images/btc_qr.png" alt="BTC QR Code" className="w-32 h-32" />
                    </div>
                    <p className="text-gray-600"><strong>ETH:</strong> Send the exact discounted amount worth of ETH to the address: <code className="bg-gray-200 p-1 rounded break-all">0x0D8C7a1BCC99EdE401680Eb72877650a5c480D29</code></p>
                    <div className="flex justify-center">
                      <img src="/images/eth_qr.png" alt="ETH QR Code" className="w-32 h-32" />
                    </div>
                    <div className="flex justify-center">
                      <img src="/images/eth_qr.png" alt="ETH QR Code" className="w-32 h-32" />
                    </div>
                    <div className="flex justify-center">
                      <img src="/images/eth_qr.png" alt="ETH QR Code" className="w-32 h-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Complete Verification</CardTitle>
                <CardDescription>Recommended - Full access guaranteed - $65</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Get verified for ALL SheerID discounts with our professional verification service.
                </p>
                <a href="https://buy.stripe.com/cNifZig8i74pc1CgkvafS08" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Buy Now ($65)</Button>
                </a>
                <Button className="w-full bg-green-500 hover:bg-green-600 mt-4" onClick={() => setShowAlternativePayments(!showAlternativePayments)}>
                  Alternative Payment Options (Faster!)
                </Button>
              </CardContent>
            </Card>

            {showAlternativePayments && (
              <Card className="mb-8 border-gray-300 bg-gray-100">
                <CardHeader>
                  <CardTitle>Alternative Payment Methods</CardTitle>
                  <CardDescription>These options offer faster processing times as they are instant.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Sendwave for $65 */}
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Sendwave Payment ($65 Premium Verification)</h4>
                    <p className="text-gray-600 mb-2">Get 15% off when paying with Sendwave! This is due to lower processing fees, allowing us to pass the savings to you. Your discounted price is: <strong>${(65 * 0.85).toFixed(2)}</strong></p>
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
                      <li>Punch in <strong>${(65 * 0.85).toFixed(2)}</strong>. Review it, and hit send.</li>
                    </ol>
                  </div>

                  {/* Crypto for $65 */}
                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Crypto Payment ($65 Premium Verification)</h4>
                    <p className="text-gray-600 mb-2">Get 15% off when paying with Crypto! This is due to lower processing fees, allowing us to pass the savings to you. Your discounted price is: <strong>${(65 * 0.85).toFixed(2)}</strong></p>
                    <p className="text-gray-600 mb-2"><strong>BTC:</strong> Send the exact discounted amount worth of BTC to the address: <code className="bg-gray-200 p-1 rounded break-all">bc1qashe27a9sk3ady5f2h5j7q0h6l4t8v39ycekld</code></p>
                    <div className="flex justify-center mb-2">
                      <img src="/images/btc_qr.png" alt="BTC QR Code" className="w-32 h-32" />
                    </div>
                    <div className="flex justify-center mb-2">
                      <img src="/images/btc_qr.png" alt="BTC QR Code" className="w-32 h-32" />
                    </div>
                    <p className="text-gray-600"><strong>ETH:</strong> Send the exact discounted amount worth of ETH to the address: <code className="bg-gray-200 p-1 rounded break-all">0x0D8C7a1BCC99EdE401680Eb72877650a5c480D29</code></p>
                    <div className="flex justify-center">
                      <img src="/images/eth_qr.png" alt="ETH QR Code" className="w-32 h-32" />
                    </div>
                    <div className="flex justify-center">
                      <img src="/images/eth_qr.png" alt="ETH QR Code" className="w-32 h-32" />
                    </div>
                    <div className="flex justify-center">
                      <img src="/images/eth_qr.png" alt="ETH QR Code" className="w-32 h-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* After Payment Instructions */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle>After Payment</CardTitle>
              <CardDescription>Important steps to complete your verification.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Please email <a href="mailto:sheeredudeals@gmail.com" className="text-blue-600 hover:underline">sheeredudeals@gmail.com</a> or text <a href="tel:+13477667259" className="text-blue-600 hover:underline">+1(347)-766-7259</a> with the exact names you want verified.
              </p>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="mb-8 border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• After payment, you'll receive an email with next steps within 24 hours</li>
                <li>• Our service works for both students and non-students</li>
                <li>• We accept any email address (no .edu required for verification)</li>
                <li>• 100% money-back guarantee if verification fails</li>
                <li>• Support available at sheeredudeals@gmail.com</li>
                <li>• Get 15% off if you buy with Bitcoin, Crypto or Sendwave (faster and cheaper fees)</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm underline flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EduOnlyPage


